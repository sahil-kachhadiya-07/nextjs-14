import { createInvoice } from './form'
export default function Page() {
    //   async function createInvoice(formData: FormData) {
    //     'use server'

    //     const rawFormData = {
    //       customerId: formData.get('customerId'),
    //       amount: formData.get('amount'),
    //       status: formData.get('status'),
    //     }
    //    console.log('rawFormData', rawFormData)
    //     // mutate data
    //     // revalidate cache
    //   }

    return <form action={createInvoice}>
        <input type="text" className="border border-solid border-black" name="customerId" />
        <input type="text" name="amount" />
        <input type="text" name="status" />
        <button type="submit">Update User Name</button>
    </form>
}