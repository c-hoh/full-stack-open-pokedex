// comment to create a new commit...
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('single page can be visited', function() {
    cy.visit('http://localhost:5000')
    cy.get('[href="/pokemon/eevee"]').click()
    cy.get('div.pokemon-name').contains('eevee')
  })
})