/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search } from 'lucide-react';

export function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const nameFromUrl = searchParams.get('name') || '';

  const [term, setTerm] = useState(nameFromUrl);
  const isUserTyping = useRef(false);

  useEffect(() => {
    if (!isUserTyping.current)
      setTerm(nameFromUrl);
  }, [nameFromUrl]);

  useEffect(() => {
    const hasGenre = searchParams.get('genre');

    if (pathname !== '/search' || hasGenre) {
      setTerm('');
      isUserTyping.current = false;
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!isUserTyping.current) return;

    if (term.trim()) {
      router.push(`/search?name=${encodeURIComponent(term.trim())}`);
    } else if (pathname === '/search') {
      router.push('/');
    }
    isUserTyping.current = false;

  }, [term, pathname, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isUserTyping.current = true;
    setTerm(e.target.value);
  };

  return (
    <div className='relative w-full'>
      <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none focus:border-white focus:border focus:border-solid'>
        <Search className='h-5 w-5 text-[#666666]' />
      </div>
      <input
        type='text'
        value={term}
        onChange={handleChange}
        className='w-full bg-[#212121] text-white text-sm font-semibold rounded-3xl py-3 pl-12 placeholder-[#666666] 
             outline-none focus:ring-1 focus:ring-white transition-all'
        placeholder='Pesquisar'
      />
    </div>
  );
}