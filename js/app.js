angular.module('test', ['angularUtils.directives.dirPagination', 'ui.bootstrap'])

.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('./templates/pagination.tpl.html');
});