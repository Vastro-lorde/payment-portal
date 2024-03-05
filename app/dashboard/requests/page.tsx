"use client"
import { getAllRequests } from '@/components/helpers/superbaseHelperfunctions';
import { useEffect, useState } from 'react';

export default async function Roles() {
  const [requests, setRequests] = useState<any>([]);
  const [error, setError] = useState<String>("");
  useEffect(() => {
    const fetchRequests = async () => {
      const { error, data, message } = await getAllRequests();
      if (error?.message) {
        setError(error.message)
      }else {
        setRequests(data);
      }

    }

    fetchRequests()
  }, [])

  return <div>
      <pre>{JSON.stringify(requests, null, 2)}</pre>
      {error && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {error}
          </p>
        )}
    </div>
}