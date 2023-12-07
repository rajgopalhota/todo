import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { motion } from "framer-motion"

export default function Card({reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} dragTransition={{bounceStiffness:100, bounceDamping:30}}>
      <div className="relative flex-shrink-0 w-60 h-72 rounded-[47px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="footer absolute left-0 bottom-0 w-full">
          <div className="flex items-center justify-center mb-3 px-8 py-3">
            <h5>.4mb</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            <IoMdCloudDownload color="#fff" />
            </span>
          </div>
          <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
            <h3 className="text-sm font-semibold">Download Now</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
