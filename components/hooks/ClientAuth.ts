import { useEffect, useState } from 'react';
import { getLogedUser } from '../helpers/superbaseHelperfunctions';

export function useClientAuth() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
  
      const { user, error } = await getLogedUser();
      
      if (user) {
        setUser(user);
      }
      setLoading(false);
    };
  
    fetchData();
  }, []);

  return { user, loading };
}
