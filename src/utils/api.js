export const getRequestProtocol = protocol => {
  switch (protocol) {
    case 'all':
      return process.env.REACT_APP_REQUEST_ALL
    case 'http':
      return process.env.REACT_APP_REQUEST_HTTP
    case 'https':
      return process.env.REACT_APP_REQUEST_HTTPS
    case 'socks4':
      return process.env.REACT_APP_REQUEST_SOCKS4
    case 'socks5':
      return process.env.REACT_APP_REQUEST_SOCKS5
    default:
      return `${process.env.REACT_APP_REQUEST_OTHER}${protocol}`
  }
}

export const getRequestCountry = country => {
  return country === 'ALL'
    ? process.env.REACT_APP_REQUEST_LOCATION_ALL
    : `${process.env.REACT_APP_REQUEST_LOCATION}${country}`
}
