
import React, { useRef, useState, useEffect } from 'react';
import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';
import { Dialog } from 'primereact/dialog';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { Galleria } from 'primereact/galleria';
import { Toast } from 'primereact/toast';
import { Tree } from 'primereact/tree';
import { useNavigate } from 'react-router-dom';







export default function AdvanceDemo() {

    
    const navigate1 = useNavigate();
const navigate = useNavigate();
    

    const handleCommand = () => {
       
        navigate('/userhomepage/book'); // Redirect to the DataTable component
    };

    const handleCommand1 = () => {

        navigate1('/userhomepage'); // Redirect to the DataTable component
    };




    const [displayTerminal, setDisplayTerminal] = useState(false);
    const [displayFinder, setDisplayFinder] = useState(false);
    const [images, setImages] = useState(null);
    const [nodes, setNodes] = useState(null);
    const toast = useRef(null);
    const toast2 = useRef(null);
    const galleria = useRef(null);

    const dockItems = [
        {
            label: 'Home',

            icon: () =>
                <div onClick={handleCommand1}>

                    <img alt="Finder" src="/assests/images/nandiexpress.png" width="75%" className='rounded-lg' />
                </div>,




        },

        {
            label: 'About',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="75%" />,

        },
        {

            label: 'Ticket',
            icon: () =>

                <div onClick={handleCommand} className="cursor-pointer">
                    <img alt="ticket" src="/assests/images/ticket3.jpg" width="75%" className='rounded-lg' />

                </div>
            ,


        },
        {
            label: 'Services',
            icon: () => <img alt="Photos" src="/assests/images/services.jpg" width="75%" className='rounded-lg h-[3rem]' />,
            command: () => {
                galleria.current.show();
            }
        },
        {
            label: 'Trevel Insurance',
            icon: () => <img alt="Settings" src="/assests/images/insurance.jpg" width="75%" className='rounded-lg h-[3rem]' />
        },

    ];


    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '75%', display: 'block' }} />;
    };

    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {
            case 'date':
                response = 'Today is ' + new Date().toDateString();
                break;

            case 'greet':
                response = 'Hola ' + text.substring(argsIndex + 1) + '!';
                break;

            case 'random':
                response = Math.floor(Math.random() * 100);
                break;

            case 'clear':
                response = null;
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response) {
            TerminalService.emit('response', response);
        } else {
            TerminalService.emit('clear');
        }
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);




        return () => {
            TerminalService.off('command', commandHandler);

            // reset

        };
    }, []);



    return (
        <div className="card dock-demo  ">
            <Tooltip className="dark-tooltip" target=".dock-advanced .p-dock-action" my="center+15 bottom-15" at="center top" showDelay={150} />

            <div className="dock-window dock-advanced fixed z-30 top-8 left-0 right-0">
                <Toast ref={toast} />
                <Toast ref={toast2} position="top-center" />
                <Dock model={dockItems} className='' />
                <Dialog visible={displayTerminal} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw' }} onHide={() => setDisplayTerminal(false)} maximizable blockScroll={false}>
                    <Terminal welcomeMessage="Welcome to PrimeReact (cmd: 'date', 'greet {0}', 'random' and 'clear')" prompt="primereact $" />
                </Dialog>
                <Dialog visible={displayFinder} breakpoints={{ '960px': '50vw', '600px': '75vw' }} style={{ width: '30vw', height: '18rem' }} onHide={() => setDisplayFinder(false)} maximizable blockScroll={false}>
                    <Tree value={nodes} />
                </Dialog>
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={2} style={{ width: '400px' }}
                    circular fullScreen showThumbnails={false} showItemNavigators item={itemTemplate} />
            </div>
        </div>
    )
}
