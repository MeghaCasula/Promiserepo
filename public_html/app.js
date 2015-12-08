/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('App',['ngResource']).
        controller('ctrl', ['$scope', function($scope){
               // var books=$resource();
               $scope.selected=null;
       $scope.bookList = books; 
       $scope.get= function(bk){
           $scope.selected=bk;
//           books.get({id: books.id},function(data){
//               $scope.selected=data;
//           })
           
       };
       $scope.update=function (data){
                  var BName=prompt("Update book name", data.name);
                  if(BName==null)
                  {
                      return;
                  }
                  var Auth=prompt("Update Author Name", data.author);
           if(Auth==null)
                  {
                      return;
                  }
                  data.name= BName;
                  data.author= Auth;
//                  books.name= bookList.name;
//                  books.author= bookList.author;
                  
         // $scope.bookList.push({'name': data.name, 'author':data.author});
           
       };
              $scope.add=function (){
                  
                  var BName=prompt("Enter book name");
                  if(BName==null)
                  {
                      return;
                  }
                  var Auth=prompt("Eneter Author Name");
           if(Auth==null)
                  {
                      return;
                  }
                $scope.bookList.push({'name': BName, 'author':Auth});
                $scope.name='';
                $scope.author='';
       };
$scope.delete=function (data){
    var index = -1;		
		var comArr = eval( data);
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.bookList.splice( index, 1 );

}
                
}]);

 var books =[
     {
     id:1,
     name:'abc',
     author : 'abc1',
 },
 {
     id:2,
     name:'def',
     author:'def1'
 }
 ]