type ApiResponse<SuccessData = any, ErrorData = any> =
  | {
      isError: false;
      data: SuccessData;
    }
  | {
      isError: true;
      data: ErrorData;
    };

export default ApiResponse;
