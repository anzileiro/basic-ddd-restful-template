import Message from '@domain/shared/Message';

export interface MessageSplitterStrategy {
    execute(data: any[]): Message[];
}
