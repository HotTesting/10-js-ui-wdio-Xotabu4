declare global {
    namespace WebdriverIO {
        interface Browser {
            // browserCustomCommand: (arg: any) => void
        }

        interface MultiRemoteBrowser {
            // browserCustomCommand: (arg: any) => void
        }

        interface Element {
            click: (wait?: boolean) => void
        }
    }
}

export {}