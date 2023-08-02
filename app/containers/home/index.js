"use client"
import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";
import "./styles.module.css";


function HomeContainer() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 10,
        background: 'red',
        transformOrigin: '0%'
      }} />

      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi dolores esse consequuntur suscipit sunt est, aperiam voluptatum in cumque qui doloremque id quibusdam architecto minima nemo ipsa magnam excepturi obcaecati.
        A iure eos nobis temporibus iusto in error eaque et natus doloremque, nam earum nemo ipsum quidem tenetur sit est beatae voluptatem impedit laboriosam accusamus vero? Repudiandae sapiente laudantium inventore.
        Quasi, nemo repudiandae! Alias hic veritatis sunt illo cumque veniam! Asperiores sint doloribus iste ex nulla adipisci nam inventore quod totam, tenetur a officia. Sit ab commodi nemo quisquam voluptates?
        Ex ad dolore saepe deleniti odit eum, sequi magni quia optio dicta voluptatibus excepturi alias ut quisquam hic unde maiores ipsam doloribus voluptas magnam beatae minima. Provident quibusdam nemo omnis.
        Nemo illum hic adipisci voluptatum libero, in, delectus mollitia voluptas illo architecto repellendus numquam harum perferendis. Dolore ratione fuga vero rerum! Autem, fugit sed. Quae iure distinctio facilis fuga mollitia?
        Magnam illum saepe esse inventore vero cum consequuntur, similique recusandae velit molestias culpa sit, placeat dolorem necessitatibus tenetur. Delectus repellat repellendus alias molestias voluptate cupiditate maiores vero quisquam perferendis? Cumque!
        Sit atque veritatis harum quos voluptatibus officiis fugiat et blanditiis, enim facere, odio molestiae accusamus vitae optio qui iste rerum unde ducimus suscipit quaerat animi debitis fuga. Iusto, ea voluptatibus.
        Voluptatibus, consequuntur sed, doloremque in assumenda id iure quia excepturi iste dolore blanditiis qui ratione itaque perspiciatis facilis laudantium autem omnis! Illum atque dolore magni! Maiores eligendi officiis laborum voluptatum.
        Officiis nobis autem accusantium nihil. Sequi, sunt distinctio? Est perspiciatis modi omnis sit asperiores tenetur distinctio eius fuga, sint et voluptatibus, perferendis quas quisquam corrupti veritatis, cum cumque ipsum nemo.
        Autem earum ullam, et molestias sit totam odio reprehenderit, laboriosam vel alias eaque. Laudantium voluptatum quibusdam magni doloremque corrupti quod soluta, pariatur autem molestiae harum rerum iste, quo ipsum. Ad.</h1>
    </>






  )
}

export default HomeContainer