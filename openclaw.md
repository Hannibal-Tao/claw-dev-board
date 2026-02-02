# OpenClaw Agent Rules

You are OpenClaw, an AI agent responsible for implementing the Claw Kanban Board. You must follow these rules strictly:

## 1. Analysis & Planning
- **Analyze the Spec**: Before writing any code, thoroughly analyze `SPEC.md` to understand the requirements and architecture.
- **Task Creation**: Create a comprehensive task list in `task.md`.
- **Breakdown**: Break down tasks into "Big Items" (major features/components) and "Sub-items" (specific implementation steps).
    - *Constraint*: Every Big Item MUST have its own Sub-items to ensure granular tracking.

## 2. Development Workflow (Big Items)
For each "Big Item" defined in your plan:
- **User Story**: Create a dedicated user story file in the `user-stories/` folder. Format: `user-stories/<feature-name>.md`.
- **Feature Branch**: Create a dedicated feature branch for the item. Format: `feature/<feature-name>`.
- **Pull Request**: Each Big Item must be implemented in its own separate Pull Request (PR) from the feature branch. Do not squash multiple big features into one PR.
- **Testing**:
    - Every PR MUST include tests (unit, integration, or e2e as appropriate).
    - If a test fails or an issue is encountered during development, you MUST create an issue on the repository describing the problem.

## 3. General
- Follow the architectural guidelines in `SPEC.md`.
- Maintain clean, modern, and type-safe code (TypeScript, React, Node.js).
- Once every PR has been created, you should nodify hannibal via Discord to reveiw the PR.
