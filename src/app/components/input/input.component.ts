import {Component, input} from '@angular/core';

/**
 * Abordagem utilizada para criar componentes customizados que podem ser utilizados em qualquer projeto Angular e
 * que mantém o acesso às propriedades html do elemento renderizado no content. <br>
 * Estratégia recomendada somente para componentes únicos. Exemplo: input, button, etc .< br>
 * Caso necessite de um componente mais complexo, recomenda-se a criacão de um Wrapper .< br>
 *
 * A propriedade <code>standalone</code> é utilizada para informar que o componente não possui
 * dependências de outros componentes do projeto .< br>
 * A propriedade <code>host</code> é utilizada para definir o comportamento do componente .< br>
 */
@Component({
    selector: 'input[app-input]',
    standalone: true,
    host: {
        // Passando o método placeholderUpperCase() para interceptar o valor da propriedade placeholder do input.
        '[placeholder]': 'placeholderUpperCase()',
        // Passando o método onInput() para interceptar o evento input (disparado em cada evento de tecla) do input.
        '(input)': 'onInput($event)'
    },
    imports: [],
    template: '<ng-content />',
    styles: `
      :host {
        display: block;
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
      }
    `
})
export class InputComponent {
    // Utilizando signal para receber o valor da propriedade placeholder.
    placeholderUpperCase = input('', {
        alias: 'placeholderUpperCase',
        transform: (value: string | null) => (value ?? '').toUpperCase()
    });
    onInput = (event: Event) => {
        console.log('input event', event);
    };
}
