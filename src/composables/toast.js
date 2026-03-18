/**
 *  Default messages to display in toast
 * 
 *  @author: Jorge S. Leal <jorge.leal@cceo.com.mx>
 */

// IMPORTS
import { useToast } from 'primevue/usetoast';

const useAppToast = (life_time = 8000) => {

    const primeVue = useToast();

    const defaultSuccess = (message = null) => {
        primeVue.add({
            severity: 'success',
            summary: 'Ok',
            detail: message ?? 'Action completed successfully.',
            life: life_time
        })
    }

    const defaultError = (message = null) => {
        primeVue.add({
            severity: 'error',
            summary: 'Error',
            detail: message ?? 'An unexpected error has occurred. Please contact technical support.',
            life: life_time
        })
    }

    const defaultInfo = (message = null) => {
        primeVue.add({
            severity: 'info',
            summary: 'Info',
            detail: message ?? 'Action completed.',
            life: life_time
        })
    }

    const defaultWarn = (message = null) => {
        primeVue.add({
            severity: 'warn',
            summary: 'Warning',
            detail: message ?? 'Please review the information provided.',
            life: life_time
        })
    }

    const defaultDeleted = (message = null) => {
        primeVue.add({
            severity: 'success',
            summary: 'Ok',
            detail: message ?? 'Record successfully deleted.',
            life: life_time
        })
    }

    return {
        primeVue,
        defaultSuccess,
        defaultError,
        defaultInfo,
        defaultWarn,
        defaultDeleted
    };
}

export default useAppToast;