describe('Tests for the ToDo Web Application', () => {
  // Run before each test in this describe block
  beforeEach(() => {
    // Open the application
    cy.visit('https://todomvc.com/examples/react/dist/')

    // Define aliases
    cy.get('[data-testid="text-input"]').as('TaskNameTextInput')
  })

  it('Create first new task', () => {
    // Type "Task1" in the "What needs to be done?" text area and press enter
    // cy.get('#todo-input').type('Task1{enter}')
    cy.get('@TaskNameTextInput').type('Task1{enter}')

    // Verify only one new task gets created and its name is "Task1"
    cy.get('[data-testid="todo-item"]').should('have.length', 1)
    cy.get('[data-testid="todo-item-label"]').should('have.text', 'Task1')

    // Verify the footer of the table is now visible and it contains the text "1 item left!"
    cy.get('[data-testid="footer"]').should('be.visible')
    cy.get('.todo-count').should('have.text', '1 item left!')

    // Verify user can see the check box beside the "What needs to be done?" text area
    cy.get('[data-testid="toggle-all"]').should('exist')
  })

  it('Edit a task', () => {
    // Create a task "Task1"
    cy.get('@TaskNameTextInput').type('Task1{enter}')

    // Double click on "Task1"
    cy.contains('label', 'Task1').dblclick()

    // Find input box for Task1 within the task list
    cy.get('.todo-list')
      .find('input[type="text"]')
      .filter('[value="Task1"]') // Find the text input element with value "Task1"
      .should('have.value', 'Task1') // Verify it has the expected value
      .clear() // Clear the input
      .type('NewTask1{enter}') // Type the new name for the task

    // Verify only one task exists and its name is "NewTask1"
    cy.get('[data-testid="todo-item"]').should('have.length', 1)
    cy.get('[data-testid="todo-item-label"]').should('have.text', 'NewTask1')

    // Verify the footer still contains the text "1 item left!"
    cy.get('.todo-count').should('have.text', '1 item left!')
  })

  it('Mark a task as completed', () => {
    // Create Two tasks "Task1" and "Task2"
    cy.get('@TaskNameTextInput').type('Task1{enter}')
    cy.get('@TaskNameTextInput').type('Task2{enter}')

    // Verify two task get created and footer contains the text "2 items left!"
    cy.get('[data-testid="todo-item"]').should('have.length', 2)
    cy.get('.todo-count').should('have.text', '2 items left!')

    // Locate the label containing "Task1" and check the checkbox to mark the task as completed
    cy.contains('label', 'Task1')
      .parent() // Go to the parent element that contains both the label and the checkbox
      .find('input[type="checkbox"]') // Find the checkbox within this parent element
      .check() // Check the checkbox

    // Verify the <li> element containing "Task1" has a line-through text-decoration
    // in CSS that comes from using the class "completed"
    cy.contains('label', 'Task1')
      .closest('[data-testid="todo-item"]') // Find the <li> containing this task
      .should('have.class', 'completed') // Check if that has the class "completed"

    // Verify the footer contains the text "1 item left!"
    cy.get('.todo-count').should('have.text', '1 item left!')
  })
})
