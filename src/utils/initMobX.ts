import { configure } from 'mobx';

// https://mobx.js.org/configuration.html

configure({
    useProxies: 'never',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: false,
});
