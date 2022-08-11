function HttpClient({ config, axiosClient }) {
  this.getConfig = () => config
  this.all = (requests, { success, failure }) => {
    return axiosClient.all(requests).then(success).catch(failure)
  }

  this.request = (request, { success, failure }) => {
    request = Object.assign({}, config, request)

    return axiosClient.request(request).then(success).catch(failure)
  }

  this.retry = (originalRequest) => axiosClient.retry(originalRequest)

  /* ======================= axios Interceptors ======================= */
  this.interceptors = axiosClient.interceptors
}

export default HttpClient
