import { useState, useRef, Fragment } from 'react';
import type { StaticImageData } from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import unePetitePresentation from '@/public/images/fleche.png'; // Importation de l'image

interface ModalVideoProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const videoRef = useRef(null)

  return (
    <div className="relative">

      {/* Video thumbnail */}
      <div
        onClick={() => setModalOpen(true)}
        className="cursor-pointer"
        aria-label="Watch the video"
      >
        <Image
          src={thumb}
          alt={thumbAlt}
          width={thumbWidth}
          height={thumbHeight}
        />
      </div>

      {/* Modal */}
      {modalOpen && (
        <Transition show={modalOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClose={() => setModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" aria-hidden="true" />

            <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full p-4">
              <video
                ref={videoRef}
                src={video}
                width={videoWidth}
                height={videoHeight}
                controls
                className="mx-auto w-full"
              >
                Your browser does not support the video tag.
              </video>

              {/* Image en bas à gauche */}
              <div className="absolute bottom-0 left-0 m-4">
                <Image
                  src={unePetitePresentation}
                  alt="Une petite présentation ?"
                  width={150}  // Ajustez la largeur selon vos besoins
                  height={50}  // Ajustez la hauteur selon vos besoins
                />
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  )
}
