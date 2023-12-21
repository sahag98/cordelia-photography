import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

export default function MyModal({
  isOpen,

  selectedImg,
  setSelectedImg,
  setIsOpen,
  closeModal,
  openModal,
}: {
  isOpen: boolean;
  selectedImg: any;
  setSelectedImg: any;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
  openModal: (image: any) => void;
}) {
  console.log("image: ", selectedImg);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/5" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center lg:p-0 p-4 justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl  text-left align-middle transition-all">
                  <img
                    className="w-full h-auto"
                    src={selectedImg}
                    alt="image"
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
