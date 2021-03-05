const getHash = () => {
  const locat = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
  console.log('Location:',locat)
  return locat
}

export default getHash