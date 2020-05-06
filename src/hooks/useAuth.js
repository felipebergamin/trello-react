import { useContext } from 'react';
import { AuthContext } from '~/contexts/auth';

export default function useAuth() {
  const authContext = useContext(AuthContext);

  return authContext;
}
