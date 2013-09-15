function useItem(x,y,z,itemId,blockId)
{
        if(itemId==267)//If your item is a Iron sword
        {
                addItemInventory(3,5);//Add 5 Tnt to your inventory.
                print("Fuck Everyone");
        }
        
}
function explode(10, 10, 10, radius)
{
        if(getCarriedItem()==280)//If your item is a stick
        {
                preventDefault();//Don't call the real attack function after
                setVelY(victim,1.5);//Make them fly vertically =)
        }
}
