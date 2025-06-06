import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

function Meals() {
  const meals = getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your recipe and start cooking</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share a recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Loading meals.....</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
