const findOwnerInfo = (clients) => {
  return clients.find(client => client.role === 'OW');
}

const findInsuredInfo = (clients) => {
  return clients.find(client => client.role === 'LF');
}

export default {
  findOwnerInfo,
  findInsuredInfo
}