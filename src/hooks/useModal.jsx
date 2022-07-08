import { useState } from 'react';



export const useModal = (initialValue) => {

  const [isOpen, setIsOpen] = useState(initialValue = false);

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal]
}