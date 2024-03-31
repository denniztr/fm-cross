import { Input } from '../ui/input';

const AddEventForm = () => {
  return (
    <div>
      Форма добавления
      <form>
        <Input className="w-full" placeholder="Название мероприятия" />
      </form>
    </div>
  );
};

export default AddEventForm;
