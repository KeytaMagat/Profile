import Reeact from 'react';
import { Button } from '@/components/ui/button';
import { 
    Menubar,
    MenubarMenu,
    MenubarTrigger
} from '@radix-ui/react-menubar';
import { useNavigate } from 'react-router-dom';

const Bottom_Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className="fixed bottom-10 z-1">
            
            <Menubar className="flex justify-between items-center w-full max-w-4xl mx-auto border border-[#7C7C7C] p-2 rounded-4xl bg-[#040404]">
                <MenubarMenu>
                    <MenubarTrigger asChild>
                        <Button onClick={() => navigate('/profile-uiux')}
                            variant="ghost" 
                            className="text-white hover:bg-[#2C2C2C] hover:text-white rounded-3xl">
                            profile-uiux
                        </Button>
                    </MenubarTrigger>
                    <MenubarTrigger asChild>
                        <Button onClick={() => navigate('/')}
                            variant="ghost" 
                            className="text-white hover:bg-[#2C2C2C] hover:text-white rounded-3xl">
                            profile
                        </Button>
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>
    );
}

export default Bottom_Navbar;