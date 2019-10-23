import bcrypt from 'bcrypt';

export const hashPassword = async (plainPassword, salt) => {
  const hashed = await bcrypt.hash(plainPassword, salt || 10);
  return hashed;
};

export const verifyPassword = async (hash, plainPassword) => {
  const verified = await bcrypt.compareSync(plainPassword, hash);
  return verified;
};
