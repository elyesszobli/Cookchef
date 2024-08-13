import styles from "./Recipe.module.scss"

function Recipe(){
    return(
        <div className={styles.recipe}>
            <div className={styles.imageContainer}>
                <img src="https://idee-recette.com/wp-content/uploads/2021/06/3737.jpg" alt="recipe" />
            </div>
            <div className={`${styles.recipeTitle} d-flex flex-row align-items-center justify-content-center`}>
                <h3>Lablabi Tunisien</h3>
            </div>
        </div>
    );
}

export default Recipe;