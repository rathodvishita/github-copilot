# Submission Summary


## Track Chosen
<!-- Mark your choice with [x] -->
- [x] Backend Only
- [ ] Frontend Only
- [ ] Full-Stack (Both)


## GitHub Copilot Usage Summary
I used GitHub Copilot (GPT-4.1) to scaffold the backend project, generate TypeScript models, controllers, services, and validation middleware. Copilot helped automate RESTful API design, enforce business rules (e.g., high priority task constraint), and resolve TypeScript errors. I leveraged Copilot for code refactoring, error handling, and best practices throughout the implementation.


## Key Prompts Used
<!-- List 3-5 important prompts you used with your AI assistant -->
1. "I want to create task management feature..."
2. "Remove all logic of users, comments, subtasks..."
3. "Refactor controller to use task service instead of static coding"
4. "Add validation middleware for task creation and update"
5. "Enforce high priority constraint and add sorting in task service"


## Design Decisions (optional)
- **Decision 1:** Used in-memory arrays for task storage
  - **Reasoning:** To simulate database tables and maintain state without external dependencies
- **Decision 2:** Applied strict TypeScript typing and enums for status/priority
  - **Reasoning:** To ensure data integrity and reduce runtime errors
- **Decision 3:** Centralized validation and error handling middleware
  - **Reasoning:** To keep controllers clean and enforce consistent API responses


## Challenges Faced
Faced TypeScript module and overload errors, especially with enum validation and missing type declarations. Solved these by updating generic constraints and installing necessary type packages. Adjusted business logic to enforce high priority constraints and handled sorting requirements for tasks.


## Time Breakdown
- Planning & Setup: [10-15 minutes]
- Core Implementation: [20 minutes]
- Testing & Debugging: [10 minutes]
- Additional Requirements (30-min mark): [10 minutes]
- Optional Challenge (if attempted): [X minutes]


## Optional Challenge
- [x] Not Attempted
- [ ] Option 1: Request Logging Middleware
- [ ] Option 2: API Pagination
- [x] Option 3: Advanced Validation
- [ ] Option 4: Task Filtering & Search
- [ ] Option 5: Form Validation & UX
- [ ] Option 6: Drag-and-Drop Task Reordering
- [ ] Option 7: Local Storage / Offline Support
- [ ] Option 8: Real-time Updates
- [ ] Option 9: Task Statistics Dashboard


## Additional Notes
The backend is fully functional for task management with validation, sorting, and business rules. All endpoints are documented in the Postman collection. Copilot was used for rapid prototyping and error resolution. No frontend or optional challenges attempted.

---

## Submission Checklist
<!-- Verify before submitting -->

- [x] Code pushed to private GitHub repository
- [x] All mandatory requirements completed
- [x] Code is tested and functional
- [x] README updated (if needed)
- [x] This SUBMISSION.md file completed
- [x] MS Teams recording completed and shared
- [x] GitHub repository URL provided to RM
- [x] MS Teams recording link provided to RM