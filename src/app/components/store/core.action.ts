/* eslint-disable max-classes-per-file */

export class IncreaseBlockCountAction {
    public static readonly type = "[App Core] Aumenta o número do contador de requisições abertas para o backend";
}

export class DecreaseBlockCountAction {
    public static readonly type = "[App Core] Diminui o número do contador de requisições abertas para o backend";
}
