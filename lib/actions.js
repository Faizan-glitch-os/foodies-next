"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function validate(text) {
  return text.trim() === "" || !text;
}

export async function shareMeal(previousState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    !meal.image ||
    meal.image.size === 0 ||
    validate(meal.title) ||
    validate(meal.summary) ||
    validate(meal.instructions) ||
    validate(meal.creator) ||
    validate(meal.creator_email) ||
    !meal.creator_email.includes("@")
  ) {
    return { message: "invalide input" };
  }

  await saveMeal(meal);

  redirect("/meals");
}
