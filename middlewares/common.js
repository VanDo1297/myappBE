function success(data) {
    return this.status(200).json({
      success: true,
      message: 'Request successfully',
      data: data
    });
  }
  
  function notFound(error = 'Not Found!', data) {
    return this.status(404).json({
      success: false,
      message: 'Request failed',
      error,
      data
    });
  }
  
  function pagination(currentPage, totalResult, result, itemsPerPage) {
    return this.status(200).json({
      success: true,
      message: 'Request successfully',
      data: {
        results: result,
        pagination: {
          totalNumberOfResults: totalResult,
          itemsPerPage: itemsPerPage,
          currentPageIndex: currentPage
        }
      }
    });
  }
  
  function invalidInput(error = 'Invalid input!', data) {
    return this.status(422).json({
      success: false,
      message: 'Request failed',
      error,
      data
    });
  }
  
  function serverError(error = 'Unknown Server error') {
    return this.status(500).json({
      success: false,
      message: 'Server Error',
      error: {
        code: error.code,
        messenge: error.message
      }
    });
  }
  
  function invalidPermission(message = 'The caller does not have permission') {
    return this.status(403).json({
      success: false,
      message,
      error: 'Access denied'
    });
  }
  
  module.exports = function(req, res, next) {
    // Invalidate
    res.invalidInput = invalidInput;
  
    // Success
    res.success = success;
  
    // Not Found
    res.notFound = notFound;
  
    // Pagination
    res.pagination = pagination;
  
    // Server error
    res.serverError = serverError;
  
    // Invalid permission
    res.invalidPermission = invalidPermission;
  
    next();
  };
  
  module.exports.success = success;
  module.exports.notFound = notFound;
  module.exports.pagination = pagination;
  module.exports.serverError = serverError;
  module.exports.invalidInput = invalidInput;
  module.exports.invalidPermission = invalidPermission;
  