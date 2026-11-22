import { isGoal, Puzzle } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  let goalsComplete = 0;
  for (const crate of puzzle.crates) {
    if (isGoal(puzzle.layout, crate)) goalsComplete++;
  }
  return (
    <dl className="goalTracker">
      <p>Goals filled: {goalsComplete} of {puzzle.layout.goals.length}</p>
    </dl>
  );
}
