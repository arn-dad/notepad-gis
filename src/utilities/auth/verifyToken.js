export const verifyToken = () => {
  return !!process.env.REACT_APP_GISTS_TOKEN;
}