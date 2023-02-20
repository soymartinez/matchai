'use client'

import { Button } from '@/ui/button'
import { CommandCombobox } from '@/ui/combobox'
import { Input } from '@/ui/input'
import { Textarea } from '@/ui/textarea'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)

  const send = async () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <main className='flex flex-col gap-6 items-center justify-center min-h-[80vh] py-2 px-3'>
      <h1 className='text-4xl font-bold'>Match AI</h1>
      <section className='max-w-lg w-full'>
        <form className='flex flex-col gap-3'>
          <div className='grid w-full gap-1.5'>
            <label className='font-semibold' htmlFor='context'>Your context</label>
            <Textarea placeholder='Type your context here.' id='context' />
          </div>

          <div className='grid w-full gap-1.5'>
            <label className='font-semibold' htmlFor='message'>His/Her message</label>
            <Input type='text' id='message' placeholder='Type his/her message here.' />
          </div>

          <div className='grid w-full gap-1.5'>
            <label className='font-semibold' htmlFor='reply'>Reply</label>
            <CommandCombobox />
          </div>

          <Button onClick={send} className='w-full mt-4' size='lg' disabled={loading}>
            {loading
              ? <><Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait</>
              : 'Send'
            }
          </Button>
        </form>
      </section>
    </main >
  )
}
