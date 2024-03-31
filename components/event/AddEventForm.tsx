import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
const AddEventForm = () => {
  return (
    <div>
      Форма добавления
      <form className='space-y-3'>
        <Input className="w-full pb-" placeholder="Название мероприятия" />
        <Textarea />
      </form>
    </div>
  );
};

export default AddEventForm;
