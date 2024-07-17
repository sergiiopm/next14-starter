import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = ({ params, searchParams }) => {
  console.log(params); // => { slug: "my-first-post" }
  console.log(searchParams); // ?q=testing => { q: "testing" }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/26110304/pexels-photo-26110304/free-photo-of-ciudad-calle-hotel-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/26110304/pexels-photo-26110304/free-photo-of-ciudad-calle-hotel-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Puiblished</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>

        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          assumenda ducimus minus dolores iusto et amet, sed nam obcaecati
          provident nulla nostrum architecto eaque debitis enim voluptatum!
          Tenetur, blanditiis reprehenderit!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
