document.getElementById("resultat").innerHTML=resultat;

   function calcul ()
{
    binaire_1 = document.getElementById("binaire_1") ;
    binaire_2 = document.getElementById("binaire_2") ;
    porte = document.getElementById("porte");
    if(porte.value=='AND' )
    {calculAND();}
    if(porte.value=='OR' )
    {calculOR();}
    if(porte.value=='NAND' )
    {calculNAND();}
    if(porte.value=='NOR' )
    {calculNOR();}
    if(porte.value=='XOR' )
    {calculXOR();}
    if(porte.value=='XOR' )
    {calculXOR();}
}

function calculAND ()
{
    if (binaire_1.value==0)
    {if (binaire_2.value==0)
        {resultat=0}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==0)
        {resultat=0}
    }
    if (binaire_1.value==0)
    {if (binaire_2.value==1)
        {resultat=0}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==1)
        {resultat=1}
    }
    document.getElementById("resultat").innerHTML=resultat;
}

function calculOR ()
{
    if (binaire_1.value==0)
    {if (binaire_2.value==0)
        {resultat=0}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==0)
        {resultat=1}
    }
    if (binaire_1.value==0)
    {if (binaire_2.value==1)
        {resultat=1}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==1)
        {resultat=1}
    }
    document.getElementById("resultat").innerHTML=resultat;
}

function calculNAND ()
{
    if (binaire_1.value==0)
    {if (binaire_2.value==0)
        {resultat=1}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==0)
        {resultat=1}
    }
    if (binaire_1.value==0)
    {if (binaire_2.value==1)
        {resultat=1}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==1)
        {resultat=0}
    }
    document.getElementById("resultat").innerHTML=resultat;
}

function calculNOR ()
{
    if (binaire_1.value==0)
    {if (binaire_2.value==0)
        {resultat=1}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==0)
        {resultat=0}
    }
    if (binaire_1.value==0)
    {if (binaire_2.value==1)
        {resultat=0}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==1)
        {resultat=0}
    }
    document.getElementById("resultat").innerHTML=resultat;
}

function calculXOR ()
{
    if (binaire_1.value==0)
    {if (binaire_2.value==0)
        {resultat=0}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==0)
        {resultat=1}
    }
    if (binaire_1.value==0)
    {if (binaire_2.value==1)
        {resultat=1}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==1)
        {resultat=0}
    }
    document.getElementById("resultat").innerHTML=resultat;
}
function calculXNOR ()
{
    if (binaire_1.value==0)
    {if (binaire_2.value==0)
        {resultat=1}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==0)
        {resultat=0}
    }
    if (binaire_1.value==0)
    {if (binaire_2.value==1)
        {resultat=0}
    }
    if (binaire_1.value==1)
    {if (binaire_2.value==1)
        {resultat=1}
    }
    document.getElementById("resultat").innerHTML=resultat;
}
