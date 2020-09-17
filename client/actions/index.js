export const MENU_CHOICE = 'MENU_CHOICE'

export const menuOption = (choice) => {
  return {
    type: 'MENU_CHOICE',
    choice: choice
  }
}
