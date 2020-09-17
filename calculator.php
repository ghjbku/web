<html>
<body>

    <?php
    //                      https://localhost/calculator.php?a=2&b=3&method=division
    $a_numb= $_GET['a'];
    $b_numb= $_GET['b'];
    $calc_method= $_GET['method'];
    echo "first number: ". $a_numb . ", second number:  " . $b_numb . ", method: " . $calc_method . " <br>";
        if (is_int($a_numb) == true){
            echo "ja";
        }
        switch ($calc_method) {
            case 'addition':
                echo $a_numb + $b_numb;
                break;
            case 'multiplication':
                 echo $a_numb * $b_numb;
                break;
            case 'negation':
                echo $a_numb - $b_numb;
                break; 
            case 'division':
                echo $a_numb / $b_numb;
                break; 
            default:
                echo "nem valid tesó";
                break;
        }
    ?>

</body>
</html> 