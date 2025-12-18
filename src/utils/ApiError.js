class ApiError {
    constructor(statusCode,message="something went worrong",errors=[],stack)
    {
      super(message)
      this.statusCode = statusCode,
      this.message= message,
      this.error = errors
      this.data =null,
      this.success = false

      if(statck){
            this.stack= stack
        } else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
        
}

export { ApiError }