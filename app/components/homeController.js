app.controller('toDoController', function($scope, $element) {
    $scope.toDos = [];
    $scope.addingToDoText = '';
    $scope.check = false;

    $scope.remaining = () => {
        return $scope.toDos.filter((toDo) => {
            return toDo.finished;
        }).length;
    };

    $scope.addTodo = () => {
        if(!$scope.addingToDoText){
            return;
        }
        $scope.toDos.push(
            {
                id: $scope.toDos.length,
                text: $scope.addingToDoText,
                finished: false,
                checkDelete: false
            }
        );

        $scope.addingToDoText = '';
    };
    
    $scope.deleteSelectedTodos = () => {
        for(var i = 0; i < $scope.toDos.length; i++){
            const toDo = $scope.toDos[i];
            if(toDo.checkDelete) {
                $scope.toDos.splice(i, 1);
                i--;    
            }
        }
    };
    
    $scope.deleteAllTodos = () => {
        $scope.toDos = [];
    };
    
    $scope.selectAllToDelete = (value) => {
        $scope.toDos.forEach((toDo) => {
            toDo.checkDelete = value;
        });
    };
});