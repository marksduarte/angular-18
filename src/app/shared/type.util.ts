import {FormArray, FormControl, FormGroup} from "@angular/forms";

export type InputType = 'date' | 'email' | 'hidden' | 'number' | 'password' | 'tel' | 'time' | 'url' | 'text';

/**
 * Responsável em inferir o tipo dos elementos do Array.
 */
export type UnboxArrayType<T> = T extends Array<infer V> ? V : T;

/**
 * Faz a tipagem do formulário usando inferência condicional.<br>
 * Se array, tipa como FormArray.<br>
 * Se objeto, tipa como FormGroup.<br>
 * Caso contrário, tipa como FormControl.
 */
export type FormType<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Array<any> ? FormArray<FormControl<UnboxArrayType<T[K]>>>
    : T[K] extends Record<any, any> ? FormGroup<FormType<T[K]>> : FormControl<T[K]>;
}

/**
 * Faz a tipagem dos campos usando inferência condicional.<br>
 * Se objeto, tipa como <b>FormControlType</b> e refaz a inferência para cada campo.<br>
 * Caso contrário, tipa como <b>FormControlConfig</b>
 */
export type FormControlType<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Array<any> ? FormControlConfig
    : T[K] extends Record<any, any> ? FormControlType<T[K]> : FormControlConfig;
}

/**
 * Faz a tipagem de funções.
 */
export type FunctionType<T extends (...args: Parameters<any>) => ReturnType<any>> = T;

/**
 * Tipa as propriedades do campo.
 */
export type FormControlConfig = {
  /**
   * Texto exibido na tag <label> acima do input.
   */
  label: string;
  /**
   * Adiciona a validação Validators.maxLength ao FormControl e limita a quantidade de caracteres no <input>.
   */
  maxlength?: number;
  /**
   * Adiciona a validação Validators.required ao FormControl.
   */
  required?: boolean;
  /**
   * Exibe ou oculta a label do input.<br> Por padrão é true.
   */
  showLabel?: boolean;
  /**
   * Texto exibido no input quando está sem valor.
   */
  placeholder?: string;
  /**
   * Identificador que será atribuído ao id do input.
   */
  id: string;
  /**
   * Tipo de conteúdo do input.<br>
   */
  type?: InputType;

}
