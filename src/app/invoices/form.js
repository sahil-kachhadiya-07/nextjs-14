
export async function createInvoice(formData) {
    'use server'
 
    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    }
   console.log('rawFormData', rawFormData)
    // mutate data
    // revalidate cache
  }