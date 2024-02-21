// import './app.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Test = () => {
  // useState for animate condition
  const [open, setOpen] = useState(false);

  const variants = {
    // visible: { opacity: 1, x: 500, transition: { duration: 3 } },
    // visible: { opacity: 1, x: 250, transition: { type: 'spring', stiffness: 100, damping: 5 } },
    // hidden: { opacity: 0, transition: { duration: 3 } },
    visible: (i) => ({
      opacity: 1,
      x: 100,
      // transition: { staggerChildren: 0.5 },
      transition: { delay: i * 0.8 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ['item1', 'item2', 'item3', 'item4'];
  // const items = [1, 2, 3, 4];
  return (
    <div className='course'>
      {/* <motion.div
        className='box'
        variants={variants}
        // First var: to write all details hier
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // whileInView={{ opacity: 1, scale: 2 }}
        // Second var: to use variables
        // initial='hidden'
        // animate='visible'
        // transition={{ duration: 2 }}
        // BEST PRACTICE: to use useState hook
        animate={open ? 'visible' : 'hidden'}
        drag
      ></motion.div> */}
      <motion.ul initial='hidden' animate='visible' variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
      {/* <button onClick={() => setOpen((prev) => !prev)}>Click</button> */}
    </div>
  );
};

export default Test;
