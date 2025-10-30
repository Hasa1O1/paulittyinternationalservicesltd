"use client"
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export function InquiryForm({ service }: { service: string }) {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(formData: FormData) {
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        service
      })
    })
    const data = await res.json()
    if (res.ok) {
      setStatus('success')
      setMessage('Thank you. We will get back to you shortly.')
    } else {
      setStatus('error')
      setMessage(data?.error ?? 'Something went wrong.')
    }
  }

  return (
    <div className="rounded-lg border bg-white p-6">
      <h3 className="text-lg font-semibold">Request a quote for {service}</h3>
      <form action={onSubmit} className="mt-4 grid gap-4 sm:grid-cols-2">
        <Input name="name" placeholder="Your name" required />
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="phone" placeholder="Phone" />
        <div className="sm:col-span-2">
          <Textarea name="message" placeholder="Describe your needs" required />
        </div>
        <div className="sm:col-span-2">
          <Button type="submit" disabled={status==='loading'}>
            {status==='loading' ? 'Sending…' : 'Send Inquiry'}
          </Button>
          {status!=='idle' && (
            <p className="mt-2 text-sm text-slate-600">{message}</p>
          )}
        </div>
      </form>
    </div>
  )
}


