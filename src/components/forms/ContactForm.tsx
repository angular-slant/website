'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Textarea } from '@/components/ui/Textarea'
import { services } from '@/data/services'

const serviceOptions = [
  { value: '', label: 'Select a service' },
  ...services.map((s) => ({ value: s.id, label: s.title })),
  { value: 'other', label: 'Other / Not Sure' },
]

const budgetOptions = [
  { value: '', label: 'Select budget range' },
  { value: 'under-1k', label: 'Under $1,000' },
  { value: '1k-5k', label: '$1,000 - $5,000' },
  { value: '5k-15k', label: '$5,000 - $15,000' },
  { value: '15k-50k', label: '$15,000 - $50,000' },
  { value: '50k-plus', label: '$50,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
]

interface FormData {
  name: string
  email: string
  company: string
  service: string
  budget: string
  message: string
  website: string // Honeypot field
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    website: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSuccess(true)
    } catch (error) {
      setErrors({ message: error instanceof Error ? error.message : 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-korvol-bg-secondary rounded-xl p-8 md:p-12 border border-korvol-bg-tertiary text-center"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
        <p className="text-korvol-text-secondary mb-6">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => {
            setIsSuccess(false)
            setFormData({
              name: '',
              email: '',
              company: '',
              service: '',
              budget: '',
              message: '',
              website: '',
            })
          }}
          variant="outline"
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from users, bots will fill it */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="name"
          name="name"
          label="Full Name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Work Email"
          placeholder="john@company.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <Input
        id="company"
        name="company"
        label="Company Name"
        placeholder="Company Inc."
        value={formData.company}
        onChange={handleChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Select
          id="service"
          name="service"
          label="Service Interested In"
          options={serviceOptions}
          placeholder="Select a service"
          value={formData.service}
          onChange={handleChange}
        />
        <Select
          id="budget"
          name="budget"
          label="Budget Range"
          options={budgetOptions}
          placeholder="Select budget range"
          value={formData.budget}
          onChange={handleChange}
        />
      </div>

      <Textarea
        id="message"
        name="message"
        label="Project Details"
        placeholder="Tell us about your project, timeline, and any specific requirements..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        rows={5}
      />

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5 ml-2" />
          </>
        )}
      </Button>
    </form>
  )
}
