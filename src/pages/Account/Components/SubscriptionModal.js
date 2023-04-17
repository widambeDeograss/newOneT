import React from 'react'
import Modal from './Modal'
import ModalBody from './ModalBody'
import { Input, Textarea, Button } from '@material-tailwind/react'


function SubscriptionModal() {
  return (
    <div>
         <Modal closeModal={onClose} open={open}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Product</ModalHeader>
        <ModalBody>
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent your an
            email with all of the details of your order.
          </p>
          <Input
            error={Boolean(errors.name)}
            helper={errors.name && "This field is invalid"}
            label="Name"
            {...register("name", { maxLength: 50, required: true })}
          />
          <Textarea
            error={Boolean(errors.description)}
            helper={errors.description && "This field is invalid"}
            label="Description"
            {...register("description", { maxLength: 255 })}
          />
          <Input
            error={Boolean(errors.price)}
            helper={errors.price && "This field is invalid"}
            label="Price"
            type="number"
            {...register("price", { min: 0 })}
          />
        </ModalBody>
        <div  className="bg-gray-50 px-6 py-4 sm:flex sm:flex-row-reverse">
          <Button
            className="w-full sm:ml-3 sm:w-auto"
            color="primary"
            disabled={loading}
            loading={loading}
            type="submit"
          >
            Submit
          </Button>
          <Button
            className="w-full mt-3 sm:mt-0 sm:ml-3 sm:w-auto"
            color="ghost-primary"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Modal>
    </div>
  )
}

export default SubscriptionModal